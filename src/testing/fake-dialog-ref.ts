import {Injectable} from '@angular/core';

@Injectable()
export class FakeDialogRef<T, R = any> {
  private dialogResult: R;

  get result(): R {
    return this.dialogResult;
  }

  close(dialogResult?: R) {
    this.dialogResult = dialogResult;
  }
}
