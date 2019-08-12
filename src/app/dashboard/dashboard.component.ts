import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class Dashboard implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit() {}
}
