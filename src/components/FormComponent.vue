<template>
  <b-container class="form-container">
    <b-form @submit.stop.prevent="onSubmit" autocomplete="off">
      <b-row>
        <b-col>
          <b-form-group
            id="input-name-group"
            label="Nombre:"
            label-for="input-name"
          >
            <b-form-input
              id="input-name"
              v-model="form.name"
              placeholder="Nombre"
              required
              v-bind:class="{
                'is-invalid':
                  !validString(form.name) && formValidationState.nameBlured,
                'is-valid': validString(form.name),
              }"
              v-on:blur="formValidationState.nameBlured = true"
            ></b-form-input>
            <b-form-invalid-feedback>
              El nombre debe contener al menos 2 caracteres
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-last-name-group"
            label="Apellido:"
            label-for="input-last-name"
          >
            <b-form-input
              id="input-last-name"
              v-model="form.lastName"
              placeholder="Apellido"
              required
              v-bind:class="{
                'is-invalid':
                  !validString(form.lastName) &&
                  formValidationState.lastNameBlured,
                'is-valid': validString(form.lastName),
              }"
              v-on:blur="formValidationState.lastNameBlured = true"
            ></b-form-input>
            <b-form-invalid-feedback>
              El apellido debe contener al menos 2 caracteres
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            id="input-email-group"
            label="Email:"
            label-for="input-email"
          >
            <b-form-input
              id="input-email"
              v-model="form.email"
              type="email"
              placeholder="Email"
              required
              v-bind:class="{
                'is-invalid': !validEmail() && formValidationState.emailBlured,
                'is-valid': validEmail(),
              }"
              v-on:blur="formValidationState.emailBlured = true"
            ></b-form-input>
            <b-form-invalid-feedback>
              El formato de mail no es correcto
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-birthday-group"
            label="Fecha de Nacimiento"
            label-for="input-birthday"
          >
            <b-form-input
              id="input-birthday"
              v-model="form.birthday"
              type="date"
              placeholder="dd / mm / aaaa"
              required
              v-bind:class="{
                'is-invalid':
                  !validBirthday() && formValidationState.birthdayBlured,
                'is-valid': validBirthday(),
              }"
              v-on:blur="formValidationState.birthdayBlured = true"
            ></b-form-input>
            <b-form-invalid-feedback>
              La fecha de nacimiento debe ser anterior al día de hoy
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            id="input-province-group"
            label="Provincia:"
            label-for="input-province"
          >
            <b-form-select
              id="input-province"
              v-model="form.province"
              :options="provinces"
              required
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-phone-group"
            label="Teléfono"
            label-for="input-phone"
          >
            <b-form-input
              id="input-phone"
              v-model="form.phone"
              type="tel"
              placeholder="Teléfono"
              v-bind:class="{
                'is-invalid':
                  !validatePhone() && formValidationState.phoneBlured,
                'is-valid': validatePhone(),
              }"
              v-on:blur="formValidationState.phoneBlured = true"
            ></b-form-input>
            <b-form-invalid-feedback>
              El formato de teléfono no es correcto
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button type="submit" variant="primary" :disabled="!validateForm()"
        >Agregar Usuario</b-button
      >
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      form: {
        name: "",
        lastName: "",
        email: "",
        birthday: "",
        province: null,
        phone: "",
      },
      provinces: [
        { text: "Seleccione una provincia", value: null },
        "Buenos Aires",
        "Ciudad Autónoma de Buenos Aires",
        "Catamarca",
        "Chaco",
        "Chubut",
        "Córdoba",
        "Corrientes",
        "Entre Ríos",
        "Formosa",
        "Jujuy",
        "La Pampa",
        "La Rioja",
        "Mendoza",
        "Misiones",
        "Neuquén",
        "Río Negro",
        "Salta",
        "San Juan",
        "San Luis",
        "Santa Cruz",
        "Santa Fe",
        "Santiago del Estero",
        "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
        "Tucumán",
      ],
      formValidationState: {
        nameBlured: false,
        lastNameBlured: false,
        emailBlured: false,
        birthdayBlured: false,
        phoneBlured: false,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$emit("add-user", this.form);
      this.resetForm();
    },
    resetForm() {
      this.form.name = "";
      this.formValidationState.nameBlured = false;
      this.form.lastName = "";
      this.formValidationState.lastNameBlured = false;
      this.form.email = "";
      this.formValidationState.emailBlured = false;
      this.form.birthday = "";
      this.formValidationState.birthdayBlured = false;
      this.form.province = null;
      this.form.phone = "";
      this.formValidationState.phoneBlured = false;
    },
    validString(text) {
      return text.length >= 2;
    },
    validEmail() {
      var re = /(.+)@(.+){2,}\.(.+){2,}/;
      return re.test(this.form.email.toLowerCase());
    },
    validBirthday() {
      return this.form.birthday && new Date(this.form.birthday) < new Date();
    },
    validatePhone() {
      var re =
        /^((?:\(?\d{3}\)?[- .]?\d{4}|\(?\d{4}\)?[- .]?\d{3}|\(?\d{5}\)?[- .]?\d{2})[- .]?\d{4})$/;
      return !this.form.phone || re.test(this.form.phone);
    },
    validateForm() {
      return (
        this.validString(this.form.name) &&
        this.validString(this.form.lastName) &&
        this.validEmail() &&
        this.validBirthday() &&
        this.validatePhone()
      );
    },
  },
};
</script>

<style scopes lang="less">
.form-container {
  border: 2px solid grey;
  border-radius: 8px;
  padding: 40px 10px;
  .col {
    padding: 20px 100px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
}
</style>
