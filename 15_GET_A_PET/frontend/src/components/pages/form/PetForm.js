import { useState, useEffect } from 'react'

import formStyle from './Form.module.css'

import Input from './Input'
import Select from './Select'


function PetForm({ handleSubmit, petData, btnText }) {
    const [pet, setPet] = useState(petData || {})
    const [preview, setPreview] = useState([])
    const colors = ['Branco', 'Preto', 'Cinza', 'Caramelo', 'Mesclado', 'Dourado', 'Pintado']



    function onFileChange(e) {
        setPreview(e.target.files[0])
        setPet({ ...pet, [e.target.name]: e.target.files[0] })
    }
    function handleColor(e) {

    }

    function handleChange(e) {
        console.log(process.env.REACT_APP_API)
        console.log('teste')
        setPet({ ...pet, [e.target.name]: e.target.value })
    }


    return (
        <form className={formStyle.form_container}>
            <Input
                text="Imagem do Pet"
                type="file"
                name="images"
                handleOnChange={onFileChange}
                multiple={true}
            />

            <Input
                text="Nome do Pet"
                type="text"
                name="name"
                placeholder="Digite o nome do pet"
                value={pet.name || ''}
                handleOnChange={handleChange}
            />

            <Input
                text="Idade do Pet"
                type="text"
                name="age"
                placeholder="Digite a idade do pet"
                value={pet.age || ''}
                handleOnChange={handleChange}
            />

            <Input
                text="peso do Pet"
                type="number"
                name="weight"
                placeholder="Digite a peso do pet"
                value={pet.weight || ''}
                handleOnChange={handleChange}
            />
            <Select
                name="color"
                text="Selecione a cor"
                options={colors}
                handleOnChange={handleColor}
                value={pet.color || ''}
            />

            <Input type="submit" value={btnText} />


        </form>
    )
}

export default PetForm