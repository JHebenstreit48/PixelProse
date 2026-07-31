import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
