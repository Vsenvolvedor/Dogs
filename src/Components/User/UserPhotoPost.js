import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { photoPost } from '../../store/photoPost'
import Button from '../Form/Button'
import Input from '../Form/Input'
import Error from '../Helper/Error'
import Head from '../Helper/Head'
import styles from './UserPhotoPost.module.css'

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const {data, error, loading} = useSelector(state => state.photoPost);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.token.data);

  React.useEffect(() => {
    if(data) {
      navigate('/conta');
    }
  }, [data, navigate])

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData();
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)

    dispatch(photoPost({formData, token}));
  }

  function handleImgChange({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title='Poste sua foto'/>

      <form onSubmit={handleSubmit}>
        <Input label="Nome" type='text' name='nome'{...nome} />
        <Input label="Peso" type='number' name='peso'{...peso} />
        <Input label="Idade" type='number' name='idade' {...idade} />
        <input className={styles.file} type='file' name='img' id='img' onChange={handleImgChange} />
        {loading ? (
          <Button disabled>
            Enviando...
          </Button>
        ) : (
          <Button>
          Enviar
        </Button>
        )}
        <Error error={error} />
     
      </form>
      <div>
        {img.preview && (
        <div className={styles.preview} style={{
          backgroundImage:`url('${img.preview}')`,
        }}>
        </div>) }
      </div>
    </section>
  )
}

export default UserPhotoPost