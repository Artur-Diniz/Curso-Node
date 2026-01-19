import { useState, useEffect } from 'react'

import formStyle from './Form.module.css'

import Input from './Input'
import Select from './Select'


function PetForm({ handleSubmit, petData, btnText }) {
    const [pet, setPet] = useState(petData || {})
    const [preview, setPreview] = useState([])
    const colors = ['Branco', 'Preto', 'Cinza', 'Caramelo', 'Mesclado', 'Dourado', 'Pintado']



    function onFileChange(e) {
        setPreview(Array.from(e.target.files))
        setPet({ ...pet, [e.target.name]: e.target.files[0] })
    }
    function handleColor(e) {
        setPet({ ...pet, color: e.target.options[e.target.selectedIndex].text })

    }

    function handleChange(e) {

        setPet({ ...pet, [e.target.name]: e.target.value })
    }


    function handleSubmit(e) {
        e.preventDefault()

        console.log(pet)
    }

    return (
        <form className={formStyle.form_container} onSubmit={handleSubmit}>

            <div className={formStyle.preview_pet_images}>
                {preview.length > 0
                    ? preview.map((image, index) => (
                        <img src={URL.createObjectURL(image)} alt={pet.name} key={`${pet.name}+${index}`} />
                    )) :
                    pet.images &&
                    pet.images.map((image, index) => (
                        <img src={`${process.eventNames.REACT_APP_API}/images/pets/${image}`} alt={pet.name} key={`${pet.name}+${index}`} />
                    ))
                }
            </div>

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