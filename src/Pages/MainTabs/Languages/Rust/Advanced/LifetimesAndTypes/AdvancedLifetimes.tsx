import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AdvancedLifetimes = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/LifetimesAndTypes/AdvancedLifetimes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Advanced Lifetimes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AdvancedLifetimes;
