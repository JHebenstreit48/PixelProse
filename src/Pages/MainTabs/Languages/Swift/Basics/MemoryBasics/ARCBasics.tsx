import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
