import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const KtlintAndDetekt = () => {
  const markdownFilePath = 'Languages/Kotlin/Tools/IDEAndLint/KtlintAndDetekt';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ktlint & detekt" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KtlintAndDetekt;
