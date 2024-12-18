package com.unitap.demo.models;
import jakarta.validation.constraints.NotNull;


public class TarifForm {
    @NotNull
    private String tarif;

    @NotNull
    private String contacts;
    @NotNull
    private String messages;

    // Геттеры и сеттеры
    public String getTarif() {
        return tarif;
    }

    public void setTarif(String tarif) {
        this.tarif = tarif;
    }

    public String getContacts() {
        return contacts;
    }

    public void setContacts(String contacts) {
        this.contacts = contacts;
    }

    public String getMessages() {
        return messages;
    }

    public void setMessages(String messages) {
        this.messages = messages;
    }
}
