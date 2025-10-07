async function dataFromApi(formData) {
  try {
    const response = await fetch('http://localhost:3000/v1/post/registration', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (response.status !== 201) {
      return alert(data.error)
    } else {
      alert(data.message)
    }
  } catch (error) {
    console.error('Erro!', error)
  }
}

export default dataFromApi
