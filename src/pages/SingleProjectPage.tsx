interface SingleProjectProps {
  projectId: string;
}

export default function SingleProjectPage({ projectId }: SingleProjectProps) {
  return <div>SingleProject Page {projectId}</div>;
}
