import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AllocationsAndGC = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/PerformanceBasics/AllocationsAndGC';

  return (
    <>
      <PageLayout>
        <PageTitle title="Allocations & GC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AllocationsAndGC;
