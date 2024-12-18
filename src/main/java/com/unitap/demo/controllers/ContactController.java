package com.unitap.demo.controllers;
import com.unitap.demo.models.ContactForm;
import com.unitap.demo.models.TarifForm;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class ContactController {
    private final JavaMailSender mailSender;

    public ContactController(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @GetMapping("/contact")
    public String showContactForm(Model model) {
        model.addAttribute("contactForm", new ContactForm());
        return "index";
    }

    @PostMapping("/send")
    public String sendEmail(@ModelAttribute ContactForm contactForm, Model model) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("admin@example.com"); // Адрес электронной почты администратора
        message.setSubject("Новое сообщение от " + contactForm.getName());
        message.setText(contactForm.getMessage() + "\n\nОт: " + contactForm.getEmail());

        mailSender.send(message);

        model.addAttribute("success", true);
        return "index";
    }

    @PostMapping("/sendTarif")
    public String sendEmailTarif(@ModelAttribute TarifForm contactForm, Model model) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("tarif@example.com"); // Адрес электронной почты администратора
        message.setSubject("Тариф " + contactForm.getTarif());
        message.setText("Сообщение от: " + contactForm.getContacts() + "\n\nКонтактные данные: " + contactForm.getMessages() + "\n\nВыбранный тариф: " + contactForm.getTarif());

        mailSender.send(message);

        model.addAttribute("success", true);
        return "index";
    }
}
