import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className="login-form">
            <h3 className="login-title">Log In</h3>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
        </div>  
    );
};

export default LoginForm;

