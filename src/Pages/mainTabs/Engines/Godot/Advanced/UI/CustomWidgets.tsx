import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const CustomWidgets = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/UI/CustomWidgets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Widgets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomWidgets;
