import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SeededRNGPatterns = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Determinism/SeededRNGPatterns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Seeded RNG Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SeededRNGPatterns;
