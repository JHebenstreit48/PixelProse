import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
