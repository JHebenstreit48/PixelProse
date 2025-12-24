import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LocksAndSynchronizers = () => {
  const markdownFilePath = 'Languages/Java/Advanced/Concurrency/LocksAndSynchronizers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Locks & Synchronizers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LocksAndSynchronizers;
