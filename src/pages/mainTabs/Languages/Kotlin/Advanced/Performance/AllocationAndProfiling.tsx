import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
