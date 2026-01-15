import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const KotlinDSLPatterns = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/DSLAndBuilders/KotlinDSLPatterns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Kotlin DSL Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KotlinDSLPatterns;
