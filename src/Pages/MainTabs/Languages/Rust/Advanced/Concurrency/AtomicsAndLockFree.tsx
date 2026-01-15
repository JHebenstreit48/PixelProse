import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AtomicsAndLockFree = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/Concurrency/AtomicsAndLockFree';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Atomics & Lock-Free" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AtomicsAndLockFree;
