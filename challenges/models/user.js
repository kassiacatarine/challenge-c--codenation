class User {
  constructor(_id) {
    this._id = _id;
  }
  generateJWT() {  
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
      _id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, process.env.SECRET);
  }

  toAuthJSON () {
    return {
      _id: this._id,
      token: this.generateJWT(),
    };
  }
}

module.exports = User;