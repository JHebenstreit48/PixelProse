import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const LocksAndSynchronizers = () => {
  const markdownFilePath = 'Languages/Java/Advanced/Concurrency/LocksAndSynchronizers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Locks & Synchronizers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LocksAndSynchronizers;
