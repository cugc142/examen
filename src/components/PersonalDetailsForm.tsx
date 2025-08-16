import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio, FormLabel, TextareaAutosize } from '@mui/material';

const PersonalDetailsForm: React.FC = () => {
    const [formData, setFormData] = useState({
        greeting: '',
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        birthDate: '',
        address: ''
    });

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        gender: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = {
            firstName: !formData.firstName,
            lastName: !formData.lastName,
            email: !formData.email,
            gender: !formData.gender
        };
        setErrors(newErrors);

        if (!Object.values(newErrors).includes(true)) {
            console.log('Form submitted:', formData);
            // Aquí puedes manejar el envío del formulario
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Detalles Personales</h2>
            <FormControl fullWidth margin="normal">
                <InputLabel>Saludo</InputLabel>
                <Select name="greeting" value={formData.greeting} onChange={handleChange}>
                    <MenuItem value="Sr.">Sr.</MenuItem>
                    <MenuItem value="Sra.">Sra.</MenuItem>
                    <MenuItem value="Srta.">Srta.</MenuItem>
                </Select>
            </FormControl>
            <TextField
                name="firstName"
                label="Nombre"
                variant="outlined"
                required
                error={errors.firstName}
                helperText={errors.firstName ? 'Este campo es obligatorio' : ''}
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="lastName"
                label="Apellido"
                variant="outlined"
                required
                error={errors.lastName}
                helperText={errors.lastName ? 'Este campo es obligatorio' : ''}
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <FormControl component="fieldset" margin="normal" required error={errors.gender}>
                <FormLabel component="legend">Género</FormLabel>
                <RadioGroup name="gender" value={formData.gender} onChange={handleChange}>
                    <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                </RadioGroup>
                {errors.gender && <span>Este campo es obligatorio</span>}
            </FormControl>
            <TextField
                name="email"
                label="Correo Electrónico"
                variant="outlined"
                required
                error={errors.email}
                helperText={errors.email ? 'Este campo es obligatorio' : ''}
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="birthDate"
                label="Fecha de Nacimiento"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                value={formData.birthDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextareaAutosize
                name="address"
                minRows={3}
                placeholder="Dirección"
                value={formData.address}
                onChange={handleChange}
                style={{ width: '100%', marginTop: '16px' }}
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                Enviar
            </Button>
        </form>
    );
};

export default PersonalDetailsForm;