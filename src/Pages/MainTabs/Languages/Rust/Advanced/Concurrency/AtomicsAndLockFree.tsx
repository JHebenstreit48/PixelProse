import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const AtomicsAndLockFree = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/Concurrency/AtomicsAndLockFree';

  return (
    <>
      <PageLayout>
        <PageTitle title="Atomics & Lock-Free" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AtomicsAndLockFree;
