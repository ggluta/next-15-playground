// doesn't act like an actual component because it's not being exported as default
function BarChart() {
  return <h1>Bar chart</h1>
}

export default function DashboardPage() {
  return (
    <h1>This page contains the dashboard</h1>
  )
}
