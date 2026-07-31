import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
