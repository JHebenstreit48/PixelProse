import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
