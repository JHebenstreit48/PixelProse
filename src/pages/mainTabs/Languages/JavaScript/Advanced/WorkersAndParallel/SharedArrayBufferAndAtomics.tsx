import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SharedArrayBufferAndAtomics = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/WorkersAndParallel/SharedArrayBufferAndAtomics';

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
