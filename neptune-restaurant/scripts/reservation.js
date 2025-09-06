// Système de réservation complet pour Neptune Restaurant

class NeptuneReservation {
  constructor() {
    this.form = document.getElementById("reservationForm");
    this.successMessage = document.getElementById("successMessage");
    this.dateInput = document.getElementById("reservationDate");
    this.timeSelect = document.getElementById("reservationTime");

    this.restaurantSchedule = {
      // 0 = Dimanche, 1 = Lundi, etc.
      0: {
        // Dimanche
        lunch: { start: "11:30", end: "14:00" },
        dinner: { start: "17:00", end: "22:00" },
      },
      1: {
        // Lundi-Samedi
        lunch: { start: "11:30", end: "14:00" },
        dinner: { start: "17:00", end: "23:00" },
      },
    };

    this.init();
  }

  init() {
    if (this.form) {
      this.setMinMaxDate();
      this.bindEvents();
      this.updateAvailableSlots();
    }
  }

  bindEvents() {
    this.form.addEventListener("submit", this.handleSubmit.bind(this));
    this.dateInput.addEventListener(
      "change",
      this.updateAvailableSlots.bind(this)
    );

    // Validation en temps réel
    const inputs = this.form.querySelectorAll(
      "input[required], select[required]"
    );
    inputs.forEach((input) => {
      input.addEventListener("blur", this.validateField.bind(this, input));
      input.addEventListener("input", this.clearFieldError.bind(this, input));
    });
  }

  setMinMaxDate() {
    const today = new Date();
    const todayString = today.toISOString().split("T")[0];
    this.dateInput.setAttribute("min", todayString);

    // Limite à 3 mois
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const maxDateString = maxDate.toISOString().split("T")[0];
    this.dateInput.setAttribute("max", maxDateString);
  }

  updateAvailableSlots() {
    const selectedDate = this.dateInput.value;
    if (!selectedDate) {
      this.clearTimeOptions();
      return;
    }

    const date = new Date(selectedDate);
    const dayOfWeek = date.getDay();
    const isToday = this.isToday(selectedDate);
    const currentTime = new Date();

    // Obtenir les horaires du restaurant pour ce jour
    const schedule = this.getScheduleForDay(dayOfWeek);
    if (!schedule) {
      this.setTimeOptions([]);
      return;
    }

    // Générer tous les créneaux possibles
    let availableSlots = this.generateTimeSlots(schedule);

    // Filtrer les créneaux passés si c'est aujourd'hui
    if (isToday) {
      const currentHour = currentTime.getHours();
      const currentMinutes = currentTime.getMinutes();
      const currentTimeString = `${currentHour.toString().padStart(2, "0")}:${currentMinutes.toString().padStart(2, "0")}`;

      availableSlots = availableSlots.filter((slot) => {
        const slotTime = slot.value;
        return slotTime > this.addMinutesToTime(currentTimeString, 120); // 2h à l'avance minimum
      });
    }

    // Simuler des créneaux déjà pris (pour la démo)
    availableSlots = this.simulateBookedSlots(availableSlots, selectedDate);

    this.setTimeOptions(availableSlots);
  }

  getScheduleForDay(dayOfWeek) {
    // Lundi à Samedi = même horaire
    if (dayOfWeek >= 1 && dayOfWeek <= 6) {
      return this.restaurantSchedule[1];
    }
    // Dimanche
    if (dayOfWeek === 0) {
      return this.restaurantSchedule[0];
    }
    return null;
  }

  generateTimeSlots(schedule) {
    const slots = [];

    // Créneaux déjeuner
    const lunchSlots = this.generateSlotsForPeriod(
      schedule.lunch.start,
      schedule.lunch.end,
      30
    );
    slots.push(...lunchSlots);

    // Créneaux dîner
    const dinnerSlots = this.generateSlotsForPeriod(
      schedule.dinner.start,
      schedule.dinner.end,
      30
    );
    slots.push(...dinnerSlots);

    return slots;
  }

  generateSlotsForPeriod(startTime, endTime, intervalMinutes) {
    const slots = [];
    let current = this.timeStringToMinutes(startTime);
    const end = this.timeStringToMinutes(endTime) - 30; // Arrêter 30min avant la fermeture

    while (current <= end) {
      const timeString = this.minutesToTimeString(current);
      slots.push({
        value: timeString,
        text: timeString.replace(":", "h"),
      });
      current += intervalMinutes;
    }

    return slots;
  }

  timeStringToMinutes(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  }

  minutesToTimeString(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
  }

  addMinutesToTime(timeString, minutesToAdd) {
    const totalMinutes = this.timeStringToMinutes(timeString) + minutesToAdd;
    return this.minutesToTimeString(totalMinutes);
  }

  simulateBookedSlots(availableSlots, selectedDate) {
    // Simuler des réservations existantes de façon réaliste
    const bookedCount = Math.floor(Math.random() * 4); // 0-3 créneaux pris
    const slotsToRemove = [];

    for (let i = 0; i < bookedCount && availableSlots.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * availableSlots.length);
      slotsToRemove.push(randomIndex);
    }

    // Retirer les créneaux en partant de la fin pour ne pas décaler les indices
    slotsToRemove
      .sort((a, b) => b - a)
      .forEach((index) => {
        availableSlots.splice(index, 1);
      });

    return availableSlots;
  }

  setTimeOptions(slots) {
    this.clearTimeOptions();

    if (slots.length === 0) {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = "Aucun créneau disponible";
      option.disabled = true;
      this.timeSelect.appendChild(option);
      return;
    }

    slots.forEach((slot) => {
      const option = document.createElement("option");
      option.value = slot.value;
      option.textContent = slot.text;
      this.timeSelect.appendChild(option);
    });
  }

  clearTimeOptions() {
    this.timeSelect.innerHTML =
      '<option value="">Sélectionnez d\'abord une date</option>';
  }

  isToday(dateString) {
    const today = new Date();
    const todayString = today.toISOString().split("T")[0];
    return dateString === todayString;
  }

  validateField(field) {
    this.clearFieldError(field);

    if (!field.value && field.required) {
      this.showFieldError(field, "Ce champ est requis");
      return false;
    }

    if (field.type === "email" && field.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value)) {
        this.showFieldError(field, "Adresse email invalide");
        return false;
      }
    }

    if (field.type === "tel" && field.value) {
      const phoneRegex = /^(\+33|0)[1-9](\d{8})$/;
      if (!phoneRegex.test(field.value.replace(/\s/g, ""))) {
        this.showFieldError(field, "Numéro de téléphone invalide");
        return false;
      }
    }

    return true;
  }

  showFieldError(field, message) {
    field.style.borderColor = "#e74c3c";

    let errorElement = field.parentNode.querySelector(".field-error");
    if (!errorElement) {
      errorElement = document.createElement("span");
      errorElement.className = "field-error";
      errorElement.style.cssText =
        "color: #e74c3c; font-size: 0.875rem; margin-top: 4px; display: block;";
      field.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
  }

  clearFieldError(field) {
    field.style.borderColor = "";
    const errorElement = field.parentNode.querySelector(".field-error");
    if (errorElement) {
      errorElement.remove();
    }
  }

  async handleSubmit(e) {
    e.preventDefault();

    // Valider tous les champs
    const requiredFields = this.form.querySelectorAll(
      "input[required], select[required]"
    );
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    if (!isValid) {
      this.showNotification(
        "Veuillez corriger les erreurs dans le formulaire",
        "error"
      );
      return;
    }

    const submitBtn = this.form.querySelector(".c-reservation-widget__submit");
    const originalText = submitBtn.textContent;

    try {
      // Animation de chargement
      submitBtn.disabled = true;
      submitBtn.textContent = "Envoi en cours...";

      await this.submitReservation();
      this.showSuccess();
    } catch (error) {
      this.showNotification(error.message, "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  }

  async submitReservation() {
    const formData = new FormData(this.form);
    const reservationData = {
      date: this.dateInput.value,
      time: this.timeSelect.value,
      guests: document.getElementById("reservationGuests").value,
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      notes: formData.get("notes"),
      timestamp: new Date().toISOString(),
      id: Date.now() + Math.random().toString(36).substr(2, 9),
    };

    // Simuler l'envoi (remplacer par vraie API)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simuler 5% d'échec
    if (Math.random() < 0.05) {
      throw new Error(
        "Créneau non disponible, veuillez choisir un autre horaire"
      );
    }

    // Stocker en localStorage pour la démo
    this.saveReservation(reservationData);

    return reservationData;
  }

  saveReservation(reservation) {
    const reservations = JSON.parse(
      localStorage.getItem("neptune_reservations") || "[]"
    );
    reservations.push(reservation);
    localStorage.setItem("neptune_reservations", JSON.stringify(reservations));
  }

  showSuccess() {
    this.form.style.display = "none";
    this.successMessage.classList.add("c-reservation-widget__success--visible");

    // Auto-reset après 8 secondes
    setTimeout(() => {
      this.resetForm();
    }, 8000);
  }

  resetForm() {
    this.form.style.display = "grid";
    this.form.reset();
    this.successMessage.classList.remove(
      "c-reservation-widget__success--visible"
    );
    this.setMinMaxDate();
    this.clearTimeOptions();
  }

  showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      widht:30%;
      right: 20px;
      background: ${type === "error" ? "#e74c3c" : "#27ae60"};
      color: white;
      padding: 16px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animation d'entrée
    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 100);

    // Suppression automatique
    setTimeout(() => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  new NeptuneReservation();
});

// Fonction pour voir les réservations
window.viewReservations = function () {
  const reservations = JSON.parse(
    localStorage.getItem("neptune_reservations") || "[]"
  );
  console.table(reservations);
  alert(
    `${reservations.length} réservation(s) en base. Voir la console pour les détails.`
  );
  return reservations;
};
