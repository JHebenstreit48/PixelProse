import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
