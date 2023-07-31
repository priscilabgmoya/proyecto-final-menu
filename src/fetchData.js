// import { useState, useEffect } from 'react'



// const useFetch = (url) => {
//   const [data, setData] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [controller, setController] = useState(null)

//   useEffect(() => {
//     const abortController = new AbortController()
//     setController(controller)
//     setLoading(true)
//     fetch(url, { signal: abortController.signal })
//       .then(res => res.json())
//       .then(data => setData(data))
//       .catch(error => setError(error))
//       .finally( () => setLoading(false))
    
//     return () => abortController.abort()
//   }, [])


//   return { data, loading, error }
// }

// export default useFetch


// const getSuspender = promise => {
//   let status = 'pending'
//   let response

//   const suspender = promise.then(
//     res => {
//       status = 'success'
//       response =  res
//     },
//     err => {
//       status =  'error',
//       response = err
//     }

//   )

//   const read = () => {
//     switch(status) {
//       case 'pending':
//          throw suspender
//       case 'error':
//         throw response
//       default:
//         return response
//     }
//   }

//   return { read }
// }

// export const fetchData = () => {
//   const promise = fetch(url)
//     .then(res => res.json())
//     .then(data => data)

//   return getSuspender(promise)
// }