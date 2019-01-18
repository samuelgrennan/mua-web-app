import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { PersonalDetails } from 'src/app/schedule-booking-data.model';
import { ScheduleBookingService } from '../../../services/schedule-booking.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  private form: any;
  private personalDetails = new PersonalDetails();
  private isDisplayed = false;
  private isPersonalDetailsValid = false;

  @Output() personalDetailsValues = new EventEmitter<PersonalDetails>();

  constructor(private scheduleBookingService: ScheduleBookingService) { }

  ngOnInit() {
  }

  confirmPersonalDetails() {
    // if (!this.form)    // TO DO: check form is valid before allowing user to submit
    this.scheduleBookingService.setPersonalDetails(this.personalDetails);
    this.sendPersonalDetails();
    this.personalDetailsValid();
    return true;
  }

  personalDetailsValid() {
    return this.isPersonalDetailsValid = true;
  }

  sendPersonalDetails() {
    this.personalDetailsValues.emit(this.scheduleBookingService.getPersonalDetails());
  }
  
}
