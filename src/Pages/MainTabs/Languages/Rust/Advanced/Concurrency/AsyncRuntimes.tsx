import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const AsyncRuntimes = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/Concurrency/AsyncRuntimes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Async Runtimes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AsyncRuntimes;
