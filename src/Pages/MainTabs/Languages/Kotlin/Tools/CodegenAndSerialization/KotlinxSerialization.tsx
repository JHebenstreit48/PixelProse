import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const KotlinxSerialization = () => {
  const markdownFilePath = 'Languages/Kotlin/Tools/CodegenAndSerialization/KotlinxSerialization';

  return (
    <>
      <PageLayout>
        <PageTitle title="kotlinx.serialization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KotlinxSerialization;
