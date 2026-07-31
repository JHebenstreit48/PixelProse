import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const AdvancedLifetimes = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/LifetimesAndTypes/AdvancedLifetimes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Advanced Lifetimes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AdvancedLifetimes;
