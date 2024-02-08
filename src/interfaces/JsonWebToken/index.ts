interface JSONWebToken {
    
    auth(payload: object): void;

    generateToken(): string;

}

export default JSONWebToken