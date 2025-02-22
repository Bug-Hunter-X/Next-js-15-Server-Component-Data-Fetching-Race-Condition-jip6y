To resolve this issue, utilize `Promise.all` or `await` to ensure both data fetches are complete before rendering. This avoids potential race conditions.

```javascript
// pages/index.js (Server Component)
export default async function Page() {
  const [data, nestedData] = await Promise.all([
    fetchData(),
    fetchData().then(data => fetchNestedData(data.id))
  ]);
  return (
    <div>
      <h1>Main Data: {data.title}</h1>
      <NestedComponent data={nestedData}/>
    </div>
  );
}

// NestedComponent.js (Server Component) - No changes needed
export default async function NestedComponent({data}) {
  return (
    <div>
      <h2>Nested Data: {data.description}</h2>
    </div>
  );
}

async function fetchData() {
  return await fetch('/api/data').then(res => res.json());
}

async function fetchNestedData(id) {
  return await fetch(`/api/nestedData/${id}`).then(res => res.json());
}
```
This ensures that both `fetchData` and `fetchNestedData` complete before rendering, preventing the race condition.