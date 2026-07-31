import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
