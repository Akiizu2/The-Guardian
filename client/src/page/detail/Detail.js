import React, { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function DetailPage() {
  const params = useParams()

  useEffect(() => {
    console.log('params', params)
  }, [params])

  return (
    <div>DetailPage</div>
  )
}

export default memo(DetailPage)