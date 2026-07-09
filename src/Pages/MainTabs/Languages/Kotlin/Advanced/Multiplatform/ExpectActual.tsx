import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExpectActual = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Multiplatform/ExpectActual';

  return (
    <>
      <PageLayout>
        <PageTitle title="expect/actual" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExpectActual;
