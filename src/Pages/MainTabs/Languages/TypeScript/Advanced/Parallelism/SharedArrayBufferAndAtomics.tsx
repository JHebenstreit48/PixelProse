import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SharedArrayBufferAndAtomics = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/Parallelism/SharedArrayBufferAndAtomics';

  return (
    <>
      <PageLayout>
        <PageTitle title="SharedArrayBuffer & Atomics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SharedArrayBufferAndAtomics;
