import React from 'react'
import ListCustomers from './listCustomers'

const App = () => {
  console.log(ListCustomers)

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customers-${customer.id}-${index}`}>
        <li>{customer.name}</li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }
  const renderSkills = (skill, index) => (
    <div style={{ paddingLeft: '30px' }} key={`skill-${index}-${index}`}>
      <li>{skill}</li>
    </div>
  )

  return (
    <div>
      <p>SpeedSul Innovation</p>
      <p>Seja bem vindo a Innovation</p>
      <div>
        <ul>{ListCustomers.map(renderCustomers)}</ul>
      </div>
    </div>
  )
}
export default App
