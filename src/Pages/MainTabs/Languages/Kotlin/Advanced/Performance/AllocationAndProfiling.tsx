import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AllocationAndProfiling = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Performance/AllocationAndProfiling';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Allocation & Profiling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AllocationAndProfiling;
