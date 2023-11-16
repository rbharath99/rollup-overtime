import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Loader from '../ui/Loader'
import './overTimeMarketsItems.css'
import ErrorMessage from '../ui/ErrorMessage'
import GenerateRandomIndex from '../scripts/GenerateRandomIndex'
import useFetch from '../scripts/useFetch'

function BaseOverTimeMarketsItem() {
  const url = 'https://api.thalesmarket.io/overtime/networks/8453/sports'
  const [selectedMarketIndex, setSelectedMarketIndex] = useState(0)
  const { data, loading, error } = useFetch(url)

  if (loading) return Loader()
  if (error) return ErrorMessage()

  if (!data) {
    return <p>Error: Data could not be fetched.</p>
  }

  const handleShowAnotherMarket = () => {
    const newSelectedMarket = GenerateRandomIndex(data)
    setSelectedMarketIndex(newSelectedMarket)
  }

  return (
    <Card bg="primary" style={{ height: '500px' }}>
      <Card.Header>Overtime Markets on Base</Card.Header>
      <Card.Body>
        <Card.Title>
          <h2 style={{ textAlign: 'center', color: 'black' }}>
            Base Markets available now on Overtime
          </h2>
        </Card.Title>
        <Card className="inner-card">
          {data[selectedMarketIndex].name}
          <Button variant="primary" onClick={handleShowAnotherMarket}>
            {loading ? 'Loading…' : 'Show me Another Market'}
          </Button>
        </Card>
      </Card.Body>
    </Card>
  )
}

export default BaseOverTimeMarketsItem
