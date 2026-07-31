import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ARCBasics = () => {
  const markdownFilePath = 'Languages/Swift/Basics/MemoryBasics/ARCBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="ARC Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ARCBasics;
