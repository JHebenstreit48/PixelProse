import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
