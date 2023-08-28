export class User {
  constructor(
    private _id: string,
    private _auth0UserId: string,
    private _name: string,
    private _email: string
  ) {}

  get id() {
    return this._id;
  }

  get auth0UserId() {
    return this._auth0UserId;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }
}
