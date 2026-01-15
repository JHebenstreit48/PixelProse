import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GradleKotlinDSL = () => {
  const markdownFilePath = 'Languages/Kotlin/Tools/BuildAndConfig/GradleKotlinDSL';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Gradle Kotlin DSL" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GradleKotlinDSL;
