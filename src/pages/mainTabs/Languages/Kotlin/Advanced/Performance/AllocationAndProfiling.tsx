import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AllocationAndProfiling = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Performance/AllocationAndProfiling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Allocation & Profiling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AllocationAndProfiling;
