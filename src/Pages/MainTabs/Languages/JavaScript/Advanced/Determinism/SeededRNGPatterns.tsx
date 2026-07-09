import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SeededRNGPatterns = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Determinism/SeededRNGPatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Seeded RNG Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SeededRNGPatterns;
